//* Importo librería para el CAPTCHA
import ReCAPTCHA from "react-google-recaptcha"
//* Importo las credenciales del CAPTCHA
import credentials from "../../credentials"

export default function Captcha({ register, setValue, errors }) {
    return (
      <>
        <div className="recaptcha">
          <ReCAPTCHA
            {...register('recaptcha',{ required: "Por favor, completa el CAPTCHA", })}
            sitekey={credentials.captchaKey}
            name="recaptcha"
            onChange={(value) => {
              setValue("recaptcha", value)
            }}
            onExpired={() => {
              setValue("recaptcha", "")
            }}
            className="recaptcha-container"
          />
        </div>
        {errors?.recaptcha && <p className="text-danger fw-bold">{errors.recaptcha.message}</p>}
      </>
    )
  }
