import React from 'react'

export default function footer() {
  return (
      <footer className='footer'>
        <div className='container'>
          <div className='row'>
            <div className="col-4 offset-1 col-sm-2">
            <h5>Links</h5>
                    <ul class="list-unstyled">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Menu</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
            </div>
            <div className='col-7 col-sm-5'>
            <h5>Our Address</h5>
                    <address>
                        Maharaja Agrasen Institute of Technology, Sec-22,
                        Rohini<br/>
                        <i class="fa fa-phone fa-lg"></i>: +91-0000000000<br/>
                        <i class="fa fa-fax fa-lg"></i>: +91-000000000<br/>
                        <i class="fa fa-envelope fa-lg"></i>: <a href="mailto:abhisheksharma86490@gmail.com">Meta-College.net</a>
                    </address>
            </div>
            <div class="col-12 col-sm-4 align-self-center">
                    <div class="text-center">
                        <a class="btn btn-social-icon btn-google" href="http://google.com/+"><i
                                class="fa fa-google-plus"></i></a>
                        <a class="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i
                                class="fa fa-facebook"></i></a>
                        <a class="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i
                                class="fa fa-linkedin"></i></a>
                        <a class="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i
                                class="fa fa-twitter"></i></a>
                        <a class="btn btn-social-icon btn-google" href="http://youtube.com/"><i
                                class="fa fa-youtube"></i></a>
                        <a class="btn btn-social-icon" href="mailto:"><i class="fa fa-envelope-o"></i></a>
                    </div>
              </div>
              <div class="row justify-content-center">
                <div class="col-auto">
                    <p>© Copyright 2022 Meta-College</p>
                </div>
            </div>
          </div>
        </div>
      </footer>
        )
}
