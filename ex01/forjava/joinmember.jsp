<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
    <!DOCTYPE html>
    <html>

    <head>
        <meta charset="UTF-8">
        <title>회원가입</title>
        <link rel </head>

        <body>
            <div class="menu">
                Welcome! <br>회원가입을 위한 아래 양식을 작성 해 주세요
            </div>
            <div class="joinform">
                <form action="letMeJoin" method="POST">
                    <ul>
                        <li> 아이디 : <input type="text" name="id"></li>
                        <li> 비밀번호 : <input type="password" name="password"></li>
                        <li> 성(family name) : <input type="text" name="name"></li>
                        <li> 이름(first name) : <input type="text" name="name"></li>
                        <li> 생년월일 : <input type="date" name="birth"></li>
                    </ul>
                    <input type="hidden" value="a=joinFormSubmit" />
                    <input type="submit" />
                </form>
            </div>

        </body>

    </html>