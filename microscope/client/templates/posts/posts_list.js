var postsData = [
{
	title:'Introducing Telescope',
	url:'http://www.google.com'
},
{
	title:'Meteor',
	url:'http://www.google.com'
},
{
	title:'The Meteor Book',
	url:'http://www.google.com'
}
];

Template.postsList.helpers({
	posts:postsData
});