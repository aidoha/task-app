const mongoose = require('mongoose');
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true,
  useCreateIndex: true,
});

// const User = mongoose.model('User', {
//   name: {
//     type: String,
//     required: true,
//     trim: true
//   },
//   email: {
//     type: String,
//     required: true,
//     trim: true,
//     lowercase: true,
//     validate(value) {
//       if (!validator.isEmail(value)) {
//         throw new Error('Email is invalid')
//       }
//     }
//   },
//   age: {
//     type: Number,
//     default: 0,
//     validate(value) {
//       if (value < 0) {
//         throw new Error('Age must be positive number.')
//       }
//     }
//   },
//   password: {
//     type: String,
//     required: true,
//     minLength: 6,
//     trim: true,
//     validate(value) {
//       if (value === 'password') {
//         throw new Error('Your password should not contain "password"')
//       }
//     }
//   }
// });

// const me = new User({
//   name: '  Aidyn  ',
//   age: 21,
//   password: 'password'
// });

// me.save()
//   .then(() => console.log(me))
//   .catch((err) => console.log(err));


const Task = mongoose.model('Task', {
  description: {
    type: String,
    required: true,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
});

const me = new Task({
  description: '   ',
  age: 21,
  password: 'password'
});

me.save()
  .then(() => console.log(me))
  .catch((err) => console.log(err));
