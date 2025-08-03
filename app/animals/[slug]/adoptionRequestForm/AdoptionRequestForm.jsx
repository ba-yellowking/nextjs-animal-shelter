import classes from "./AdoptionRequestForm.module.css";

export default function AdoptionRequestForm() {
  return (
    <>
      <div>
        <form>
          <div>ANIMAL NAME</div>

          <div>
            <label htmlFor="fullName">Full name</label>
            <input name="fullName" />
          </div>

          <div>
            <label htmlFor="birth">Date of birth</label>
            <input name="birth" />
          </div>

          <div>
            <label htmlFor="phone">Phone number</label>
            <input name="phone" />
          </div>

          <div>
            <label htmlFor="comment">Comment</label>
            <textarea name="comment" />
          </div>
        </form>
      </div>
    </>
  );
}
