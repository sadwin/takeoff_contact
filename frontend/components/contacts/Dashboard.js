import React, { Fragment } from 'react';
import Form from './Form';
import Header from '../layout/Header';
import Contacts from './Contacts';

export default function Dashboard() {
  return (
    <Fragment>
      <Header />
      <Form />
      <Contacts />
    </Fragment>
  );
}
