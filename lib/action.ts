"use server";
export const ceshiServer = () => {
  return 1341;
};

export const bufferToBase64 = async (buff: ArrayBuffer) => {
  return Buffer.from(buff).toString("base64");
};
