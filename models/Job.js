var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Job Model
 * ==========
 */
var Job = new keystone.List('Job');

Job.add({
  _id: {
    type: String,
    index: true
  },
	title: {
    type: String,
    index: true
  },
	description: {
    type: String,
  },
  createdAt: {
    type: Types.Date
  },
  updatedAt: {
    type: Types.Date
  },
});

// Provide access to Keystone
Job.schema.virtual('canAccessKeystone').get(function () {
	return this.isAdmin;
});


/**
 * Registration
 */
Job.defaultColumns = '_id, title, description, createdAt, updatedAt';
Job.register();
