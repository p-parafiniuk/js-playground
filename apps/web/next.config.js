/** @type {import('next').NextConfig} */
module.exports = {
  transpilePackages: ["@repo/ui"],
  env: {
    customKey: 'my-value',
    CONTENTFUL_SPACE_ID:'aisr8e5y1hr1',
    CONTENTFUL_ACCESS_TOKEN:'gnP4vyYgP-bopglXAm0Zg8hZZTFIRQNadUJ5Pc2tOVY',
    CONTENTFUL_PREVIEW_ACCESS_TOKEN:'vN-bxQycZK10f_QxKt3MMR4smCXNyxc6iHAWxnWORaU',
  },
};
