import mongoose from 'mongoose';
import Profile from './models/profile';

const profiles = [
  {
    email: 'test@test.com',
    name: 'test',
    admission_no: 12345,
    dob: '05-05-2017',
    class: 'I',
    section: 'A',
    address: 'Shimoga',
    contact: '123456',
  },
  {
      email: 'test3@test.com',
      name: 'test3',
      admission_no: 12344,
      dob: '05-04-2017',
      class: 'I',
      section: 'B',
      address: 'Shimoga',
      contact: '12345456',
  },
  {
      email: 'test4@test.com',
      name: 'test4',
          admission_no: 12346,
          dob: '05-07-2017',
          class: 'I',
          section: 'C',
          address: 'Shimoga',
          contact: '1233456',
   },
   {
        email: 'test25@test.com',
        name: 'test25',
            admission_no: 123345,
            dob: '05-09-2017',
            class: 'I',
            section: 'E',
            address: 'Shimoga',
            contact: '123556',
   },
   {
       email: 'test30@test.com',
       name: 'test30',
           admission_no: 122345,
           dob: '09-05-2017',
           class: 'I',
           section: 'F',
           address: 'Shimoga',
           contact: '12223456',
   },
    {
          email: 'test123@test.com',
          name: 'test123',
              admission_no: 1214345,
              dob: '05-10-2017',
              class: 'I',
              section: 'G',
              address: 'Shimoga',
              contact: '1234456',
     },

];

// Connect to MongoDB
mongoose.connect('mongodb://localhost/profiles');

// Go through each movie
profiles.map(data => {
  // Initialize a model with movie data
  const profile = new Profile(data);
  // and save it into the database
  profile.save();
});