import { registerUser } from '../services/communicationManager.js';
				import { loginUser } from '../services/communicationManager.js';
				import { logoutUser } from '../services/communicationManager.js';
				import { updateUser } from '../services/communicationManager.js';
				import { changePassword } from '../services/communicationManager.js';
				import { deleteUser } from '../services/communicationManager.js';
				import { createDomain } from '../services/communicationManager.js';
				import { updateDomain } from '../services/communicationManager.js';
				import { deleteDomain } from '../services/communicationManager.js';
				import { getDomains } from '../services/communicationManager.js';
				import { showDomain } from '../services/communicationManager.js';


				// Get domains
				// getDomains().then(data => console.log(data));

				// Show domain
				// showDomain(1).then(data => console.log(data));

				// Register user and create domain
				// const user = {
				// 		user: 'juls',
				// 		name: 'John Doe',
				// 		surnames: 'Doe',
				// 		email: 'villegas@gmail.com',
				// 		password: '12345678vL',
				// 		password_confirmation: '12345678vL'
				// };
				// console.log('Registering user');
				// console.log(user);
				// registerUser(user).then(data => {
				// 		console.log(data);
				// 		const token = data.token;
				// 		const domain = {
				// 				webURL: 'vill.com',
				// 				content: 'This is the domain of Julie Villegas',
				// 			    category: 'Personal Assitant',
				// 				isPublic: 1,
				// 			};
				// 			console.log('Creating domain');
				// 			console.log(domain);
				// 			createDomain(domain, token).then(data => console.log(data));
				// });

				// Login and create domain
				// const userLog = {
				// 	user: 'johndoe',
				// 	password: '12345678vL'
				// }
				// console.log('Logging in user');
				// console.log(userLog);
				// loginUser(userLog).then(data => {
				// 	console.log(data);
				// 	const token = data.token;
				// 	const domain = {
				// 		webURL: 'doeeeeeeeee.com',
				// 		content: 'This is the domain of John Doe',
				// 		category: 'Personal Assitant',
				// 		isPublic: 0,
				// 	};
				// 	console.log('Creating domain');
				// 	console.log(domain);
				// 	createDomain(domain, token).then(data => console.log(data));
				// });

				// Login and update domain
				// const userLog = {
				// 	user: 'johndoe',
				// 	password: '12345678vL'
				// }
				// console.log('Logging in user');	
				// console.log(userLog);
				// loginUser(userLog).then(data => {
				// 	console.log(data);
				// 	const token = data.token;
				// 	const domain = {
				// 		webURL: 'dont.com',
				// 		content: 'This is the domain of julie Villegas'
				// 	};
				// 	console.log('Updating domain');
				// 	console.log(domain);
				// 	updateDomain(domain, token).then(data => console.log(data));
				// });

				// Login and delete domain
				// const userLog = {
				// 	user: 'johndoe',
				// 	password: '12345678vL'
				// }
				// console.log('Logging in user');
				// console.log(userLog);
				// loginUser(userLog).then(data => {
				// 	console.log(data);
				// 	const token = data.token;
				// 	console.log('Deleting domain');
				// 	deleteDomain(token).then(data => console.log(data.message));
				// });

				// Register, update and change password user
				// const user = {
				// 	user: 'johndoe',
				// 	name: 'John Doe',
				// 	surnames: 'Doe',
				// 	email: 'doe@gmail.com',
				// 	password: '12345678vL',
				// 	password_confirmation: '12345678vL'
				// };
				// console.log('Registering user');
				// console.log(user);

				// registerUser(user).then(data => {
				// 		console.log(data);
				// 		const token = data.token;
				// 		const userUpdate = {
				// 			user: 'jonyelPuto',
				// 			name: 'Johny',
				// 			surnames: 'VILELLA',
				// 		};
				// 		console.log('Updating user');
				// 		console.log(userUpdate);
				// 		updateUser(userUpdate, token).then(data => {
				// 				console.log(data);
				// 				const userChangePass = {
				// 					oldPassword: '12345678vL',
				// 					password: '987654321vL',
				// 					password_confirmation: '987654321vL'
				// 				};	
				// 				console.log('Changing password');
				// 				console.log(userChangePass);
				// 				changePassword(userChangePass, token).then(data => console.log(data));		
				// 		});
				// });

				// Login and logout user
				// const userLog = {
				// 	user: 'johndoe',
				// 	password: '12345678vL'
				// }

				// console.log('Logging in user');
				// console.log(userLog);
				// loginUser(userLog).then(data => 
				// {
				// 	console.log(data);
				// 	const token = data.token;
				// 	console.log('Logout user');
				// 	logoutUser(token);
				// });

				//Login and delete user
				// const userDelete = {
				// 		user: 'jonyelPuto',
				// 		password: '987654321vL'
				// 	}
				// console.log('Logging in user');
				// console.log(userDelete);
				// loginUser(userDelete).then(data => {
				// 		console.log(data);
				// 		const token = data.token;
				// 		console.log('Deleting user');
				// 		deleteUser(token).then(data => console.log(data.message));
				// });