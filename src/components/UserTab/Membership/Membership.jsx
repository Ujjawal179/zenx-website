import React from "react";
import styles from "./Membership.module.css";
import MembershipCard from "../../MembershipCard/MembershipCard";

function Membership() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h1 className="head highlighted text-center"> Memberships </h1>
      <h1 className="text-left mt-5">Active</h1>
      <div className="d-flex flex-wrap justify-content-center align-items-center">
        <MembershipCard />
        <MembershipCard />
        <MembershipCard />
        <MembershipCard />
      </div>
      <h1 className="text-left mt-5">Past</h1>
      <div className="d-flex flex-wrap justify-content-center align-items-center">
        <MembershipCard color={0} />
        <MembershipCard color={0} />
        <MembershipCard color={0} />
      </div>
    </div>
  );
}

export default Membership;
