// 参考 https://juejin.cn/post/7200609608414412860
import { useEffect, useRef, useState } from "react";

type Update = () => any;
type Store<T = unknown> = { value: T; _storeDeps: Set<Update> };

export function createStore<T = unknown>(value: T): Store<T> {
  return {
    value,
    _storeDeps: new Set(),
  };
}
function effectStore(store: Store) {
  store._storeDeps.forEach((effect) => {
    effect();
  });
}

export function useUpdate() {
  const [, refresh] = useState(Date.now());

  const update = useRef(() => {
    refresh(Date.now());
  });

  return update.current;
}

export function useStore<T = unknown>(
  store: Store<T>
): [T, (newValue: T) => void] {
  const update = useUpdate();

  const setState = useRef((newValue: T) => {
    store.value = newValue;
    effectStore(store);
  });

  useEffect(() => {
    store._storeDeps.add(update);
    return () => {
      store._storeDeps.delete(update);
    };
  }, []);

  return [store.value, setState.current];
}

export function useStoreValue<T = unknown>(store: Store<T>) {
  const update = useUpdate();

  useEffect(() => {
    store._storeDeps.add(update);
    return () => {
      store._storeDeps.delete(update);
    };
  }, []);

  return store.value;
}

export const arrState = createStore([1, 2, 4]);
