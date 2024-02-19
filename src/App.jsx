        import useinput from "./Component/use-input";
        import "./App.css";

    export default function App(){
        const{
            istouch:emailistouch,
            isvalid:emailisvalid,
            handleChange:emailhandlechange,
            handleblur:emailhandleblur,
            entered:email
        }=useinput(function(value){
            let pattern=new RegExp("[a-z0-9]{10,15}@[a-z]{5,7}.[a-z]{2,3}");
            return pattern.test(value);
            
        });
         const{
            istouch:passwordistouch,
            isvalid:passwordisvalid,
            handleChange:passwordhandlechange,
            handleblur:passwordhandleblur,
            entered:password,
        }=useinput(function(value){
            return value.length>5 && value.length<10 && value.includes("$")
            
        });
        const formisvalid = emailisvalid && passwordisvalid;

 return(
    <>
    <input
    className={!emailisvalid && emailistouch ? "invalid":"valid"}
    onChange={emailhandlechange}
    onBlur={emailhandleblur}
    type="text"
    name="email"
    value={email}
    />
    {!emailisvalid && emailistouch &&<p>*requeried field</p>}
    <input
    className={!passwordisvalid && passwordistouch ? "invalid":"valid"}
    onChange={passwordhandlechange}
    onBlur={passwordhandleblur}
    type="text"
    name="password"
    value={password}
    />
    {!passwordisvalid && passwordistouch && <p>*required field</p>}
    <button disabled={!formisvalid}>submit</button>
    </>
 );
        }
    


        