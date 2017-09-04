var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * SkillSet Model
 * ==========
 */
var SkillSet = new keystone.List('SkillSet');
var Skills = new keystone.List('skills');

Skills.add({
  id: {
    type: String
  },
  name: {
    type: String
  }
});

SkillSet.add({
  _id: {
    type: String,
    index: true
  },
	role: {
    type: String,
    index: true
  },
  skills: {
    type: Types.Array,
    model: Skills,
  },
  createdAt: {
    type: Types.Date
  },
  updatedAt: {
    type: Types.Date
  },
});

// Provide access to Keystone
SkillSet.schema.virtual('canAccessKeystone').get(function () {
	return this.isAdmin;
});


/**
 * Registration
 */
SkillSet.defaultColumns = '_id, role, skills, createdAt, updatedAt';
SkillSet.register();
