import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
<div className="modal">
  <div className="modal_overlay" />  
  <div className="modal_body">
  <div className="auth-form">
  <div className="auth_form-contarner">
    <div className="authe_form-header">
      <h3 className="authe_form-deading">Đăng nhập</h3>
      <span className="authe_form-switch--btn">Đăng ký</span>
    </div>
    <div className="auth_form-form">
      <div className="auth_form-group">
        <input type="text" className="auth_form-input" placeholder="Nhập gmail của bạn" />
      </div>
      <div className="auth_form-group">
        <input type="text" className="auth_form-input" placeholder="mật khẩu của bạn" />
      </div>
      <div className="auth_form-aside">
        <div className="auth_form-help">
          <a href="/" className="auth_form-link auth_form-link--forgot">Quên mật khẩu</a>
          <span className="auth_form-help--separate" />
          <a href="/" className="auth_form-link">Cần trợ giúp?</a>
        </div>
      </div>
      <div className="auth_form-controls">
        <button className="btn btn--normal auth_form-controls-back">TRỞ LẠI</button> 
        <button className="btn btn--primary">ĐĂNG NHẬP</button>                                  
      </div> 
    </div>
    <div className="auth_form-socials">
      <a href="/" className="auth_form-socials--facebook btn btn-size--s btn_with-icon">
        <i className="auth_form-socials-icon fab fa-facebook-square" />        
        <span className="auth_form-socials--title">
          Kết nối với Facebook</span>
      </a>
      <a href="/" className="auth_form-socials--google btn btn-size--s btn_with-icon">
        <i className="auth_form-socials-icon fab fa-google" />    
        <span className="auth_form-socials--title">
          kết nối với Google</span>                                
      </a>
    </div>                                    
  </div>
  </div>
  </div>
</div>
        );
    }
}

export default Login;