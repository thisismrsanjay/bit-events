import React from "react";
import "./discuss.css";

export default function EventDetailedDiscussiond() {
  return (
    <div >
      <div className="row ">
        <div className="comments-container border  border-primary">
          <h2>Discussion </h2>

          <ul id="comments-list" className="comments-list">
            <li>
              <div className="comment-main-level">
                <div className="comment-avatar">
                  <img
                    src="http://i9.photobucket.com/albums/a88/creaticode/avatar_1_zps8e1c80cd.jpg"
                    alt=""
                  />
                </div>
                <div className="comment-box">
                  <div className="comment-head">
                    <h6 className="comment-name by-author">
                      <a href="http://creaticode.com/blog">Agustin Ortiz</a>
                    </h6>
                    <span>hace 20 minutos</span>
                    <i className="fa fa-reply" />
                    <i className="fa fa-heart" />
                  </div>
                  <div className="comment-content">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Velit omnis animi et iure laudantium vitae, praesentium
                    optio, sapiente distinctio illo?
                  </div>
                </div>
              </div>

              <ul className="comments-list reply-list">
                <li>
                  <div className="comment-avatar">
                    <img
                      src="http://i9.photobucket.com/albums/a88/creaticode/avatar_2_zps7de12f8b.jpg"
                      alt=""
                    />
                  </div>

                  <div className="comment-box">
                    <div className="comment-head">
                      <h6 className="comment-name">
                        <a href="http://creaticode.com/blog">Lorena Rojero</a>
                      </h6>
                      <span>hace 10 minutos</span>
                      <i className="fa fa-reply" />
                      <i className="fa fa-heart" />
                    </div>
                    <div className="comment-content">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Velit omnis animi et iure laudantium vitae, praesentium
                      optio, sapiente distinctio illo?
                    </div>
                  </div>
                </li>

                <li>
                  <div className="comment-avatar">
                    <img
                      src="http://i9.photobucket.com/albums/a88/creaticode/avatar_1_zps8e1c80cd.jpg"
                      alt=""
                    />
                  </div>

                  <div className="comment-box">
                    <div className="comment-head">
                      <h6 className="comment-name by-author">
                        <a href="http://creaticode.com/blog">Agustin Ortiz</a>
                      </h6>
                      <span>hace 10 minutos</span>
                      <i className="fa fa-reply" />
                      <i className="fa fa-heart" />
                    </div>
                    <div className="comment-content">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Velit omnis animi et iure laudantium vitae, praesentium
                      optio, sapiente distinctio illo?
                    </div>
                  </div>
                </li>
              </ul>
            </li>

            <li>
              <div className="comment-main-level">
                <div className="comment-avatar">
                  <img
                    src="http://i9.photobucket.com/albums/a88/creaticode/avatar_2_zps7de12f8b.jpg"
                    alt=""
                  />
                </div>

                <div className="comment-box">
                  <div className="comment-head">
                    <h6 className="comment-name">
                      <a href="http://creaticode.com/blog">Lorena Rojero</a>
                    </h6>
                    <span>hace 10 minutos</span>
                    <i className="fa fa-reply" />
                    <i className="fa fa-heart" />
                  </div>
                  <div className="comment-content">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Velit omnis animi et iure laudantium vitae, praesentium
                    optio, sapiente distinctio illo?
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <textarea className="form-control" rows="3" />
          <button className="btn btn-primary">🗨 Add Comment</button>
        </div>
      </div>
    </div>
  );
}
