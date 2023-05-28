import Image from "next/image";
import Card from "@/components/Card";

const Testimonial = ({ testimonial }) => {
  return (
    <Card className="light">
      <p>{testimonial.quote}</p>
      <div className="testimonial__client">
        <div className="testimonial__client-avatar">
          <Image
            src={testimonial.avatar}
            alt="Testimonial Avatar"
            className="testimonial__client-avatar"
            width={40}
            height={40}
          />
        </div>
        <div className="testimonial__client-details">
          <h6>{testimonial.name}</h6>
          <small>{testimonial.profession}</small>
        </div>
      </div>
    </Card>
  );
};

export default Testimonial;
