export const GET = async () => {
  return new Response("", {
    headers: { "Set-Cookie": "accessToken=blabla; Path=/; Max-Age=2000" },
  });
};
