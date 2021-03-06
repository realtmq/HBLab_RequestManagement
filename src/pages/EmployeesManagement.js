import React from 'react';
import {EmployeesMain} from '../components/Employees';
import {Sidebar, SidebarBasic} from "../components/Sidebar";
import {Row, Col, Container} from "react-bootstrap";

export const Employees = () => {
  return (
    <>
      <div className="mt-5">
        <Row>
            <Col md={3}><SidebarBasic/></Col>
            
            <Col md={9}><EmployeesMain/></Col>
        </Row>
      </div>
    </>
  );
}

export default Employees;