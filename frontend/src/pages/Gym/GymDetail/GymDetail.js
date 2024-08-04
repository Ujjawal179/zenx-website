import React from "react";
import { useParams } from "react-router-dom";
import "./GymDetail.css";
import ControlledCarousel from "../../../components/Carousel/Carousel";
import MembershipCard from "../../../components/MembershipCard/MembershipCard";

import { CiLocationOn, CiClock1, call } from "react-icons/ci";
import { IoMdCall } from "react-icons/io";

function GymDetail() {
  const { gymId } = useParams();

  return (
    <div className="main">
      <div style={{ borderRadius: "20px" }}>
        <ControlledCarousel />
      </div>
      <div className="details d-flex flex-wrap justify-content-between w-100">
        <div className="gym-details">
          <div className="physical-details">
            <h1 className="head">GYM NAME - {gymId}</h1>
            <div className="d-flex flex-column justify-content-between">
              <div className="d-flex align-items-center justify-content-between">
                <p>Address</p>
                <CiLocationOn size={"1.5em"} />
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <p>06:00 AM - 10:00 PM</p>
                <CiClock1 size={"1.5em"} />
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <p style={{ maxWidth: "70%" }}>
                  Have any queries ? Contact Us.
                </p>
                <IoMdCall size={"1.5em"} />
              </div>
            </div>
          </div>
          <div className="mt-4">
            <iframe
              width="100%"
              height="250"
              src="https://www.youtube.com/embed/MfQhwQZeJO0?autoplay=1&mute=1"
            ></iframe>
          </div>
        </div>
        <div className="membership-details">
          <h1 className="head highlighted">Subcriptions</h1>
          <MembershipCard />
          <MembershipCard />
        </div>
      </div>
    </div>
  );
}

export default GymDetail;
