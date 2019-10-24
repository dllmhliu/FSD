package com.fsd.domain;

public enum ResultCode {
    /*
    Request return status code and description information
     */
    SUCCESS(200, "success"),

    BAD_REQUEST(400, "Wrong argument or syntax"),
    UNAUTHORIZED(401, "Authentication failed"),
    LOGIN_ERROR(401, "Login failed, invalid user name or password"),
    FORBIDDEN(403, "access denied"),
    NOT_FOUND(404, "Requested resource does not exist"),
    OPERATE_ERROR(405, "Operation failed, the requested resource does not exist"),
    TIME_OUT(408, "request timeout"),

    SERVER_ERROR(500, "Server internal error"),
;
    private int code;
    private String msg;

    ResultCode(int code, String msg) {
        this.code = code;
        this.msg = msg;
    }

    public int getCode() {
        return code;
    }

    public String getMsg() {
        return msg;
    }

}
