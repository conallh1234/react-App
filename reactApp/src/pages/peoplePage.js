import React, { useContext } from "react";
import PageTemplate from '../components/templatePeopleListPage';
import {PeopleContext} from '../contexts/peopleContext';


const PeopleListPage = () => {
  const context = useContext(PeopleContext);
  const people = context.people;

  return (
      <PageTemplate 
        title='No. People'
        people={people}
      />
  );
};

export default PeopleListPage;