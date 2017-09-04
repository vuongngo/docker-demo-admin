var keystone = require('keystone');

var storage = new keystone.Storage({
  adapter: require('keystone-storage-adapter-s3'),
  s3: {
    key: process.env.S3_KEY,
    secret: process.env.S3_SECRET,
    bucket: process.env.S3_BUCKET,
    region: process.env.S3_REGION,
    path: './uploads',
    headers: {
      'x-amz-acl': 'public-read',
    },
  },
  schema: {
    bucket: true,
    etag: true,
    path: true,
    url: true
  },
});

module.exports = {
  storage: storage,
};

