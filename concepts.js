
import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";
import { Button, ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASEURL;
export default function ProfileScreen() {
  const { user: currentUser } = useSelector((state) => state.auth);

  const handleOnClick = async () => {
    axios
      .put(`${BASE_URL}/payment/cancel/${currentUser.id}`, {
        SUBSCRIPTION_ID: currentUser.subscriptionId
      })
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data));
        window.location.reload();
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return (
    <div style={{ height: "18vh" }}>
      <div className="home-main bg-black mb-0 bg-gradient py-3">
        <Header />
      </div>
      <div className="bg-black" style={{ height: "110vh" }}>
        <div className="text-white text-center d-flex flex-column justify-content-center align-content-center w-100 pt-5">
          <div className="pb-5">
            <h1>{currentUser.username}</h1>
          </div>
          <div>
            <h4>Email: {currentUser.email}</h4>
          </div>
          <div>
            <label className="fs-4">
              Free Trial Remaining{" "}
              <span
                style={{
                  fontWeight: "bolder",
                  color: "#07874d"
                }}
              >
                {Math.ceil(currentUser.expiredays)}
              </span>{" "}
              days
            </label>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <ToggleButtonGroup
            className="btn d-flex flex-column flex-wrap justify-content-between align-items-center"
            type="radio"
            name="style-options"
            size="sm"
            style={{ paddingLeft: "0px" }}
          >
            <ToggleButton
              variant="outline-light"
              id="tbg-btn-11"
              value={30}
              style={{
                borderRadius: "21px",
                width: "25vh",
                height: "auto",
                fontSize: "15px",
                paddingTop: "10px",
                paddingBottom: "10px"
              }}
            >
              $19.95 per a month
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center mt-5">
          <div className="mb-5">
            <label className="text-white">
              Payment process:{" "}
              {currentUser.subscriptionStatus === "active" ||
              currentUser.subscriptionStatus === "trialing" ? (
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <span className="mb-3 mt-1">Active</span>
                  <botton
                    className="btn btn-sm btn-outline-light"
                    onClick={handleOnClick}
                  >
                    Cancel
                  </botton>
                </div>
              ) : (
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <span className="mb-3">Deactive</span>
                  <Button
                    href={process.env.REACT_APP_PAYMENT_URL}
                    target="_blank"
                    variant="secondary"
                    size="md"
                    style={{ background: "bottom" }}
                  >
                    Pay Now
                  </Button>
                </div>
              )}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

            