import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import image from "../../assets/img/Image.png"

const Register = () => {
  return (
    <div className="parent">
      <section className="vh-100">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 text-black">
              <img
                src={image}
                alt="Login image"
                className="w-100 vh-100"
              />
            </div>
            <div className="col-sm-6 px-0 d-none d-sm-block">
              <div className="d-flex  justify-content-md-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
                <form>
                  <div className="login">
                    <h3>MASUK</h3>
                  </div>

                  <div className="">
                    <label className="form-label">Email address</label>
                    <input
                      type="email"
                      id="form2Example18"
                      className="form-control form-control-md"
                      placeholder="Email address"
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <label className="form-label">Password</label>
                    <input
                      type="password"
                      id="form2Example28"
                      className="form-control form-control-md"
                      placeholder="Password"
                    />
                  </div>

                  <div className="pt-1 mb-4  justify-content-md-center">
                    <div class="col d-flex">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          checked
                        />
                        <label class="form-check-label" for="form2Example31">
                          {" "}
                          Remember me{" "}
                        </label>
                      </div>
                      {/* <div class="col ml-4">
                        <a href="#!">Forgot password?</a>
                      </div> */}
                    </div>
                  </div>
                  <button className="button" type="button">
                    MASUK
                  </button>

                  <p>
                    Don't have an account?{" "}
                    <a href="#!" className="link-info">
                      Register here
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;