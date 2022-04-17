import ReactStars from "react-rating-stars-component";

const TestMonialsContainer: React.FC = () => {
  return (
    <div className="rounded grid  grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 bg-lightMain p-6 sm:p-8 md:p-14 gap-10">
      <div className="bg-white h-64 min rounded-lg p-4 flex flex-col justify-between">
        <div>
          <ReactStars
            count={5}
            edit={false}
            size={16}
            value={5}
            activeColor="#ffd700"
          />
          <p>
            lorem ipsum dolor sit amet consectetur adipisicing elit. lorem ipsum
            dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="flex items-center">
          <img
            src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
            alt=""
            className="rounded-full w-12 h-12 object-cover"
          />
          <h4 className="ml-2">Duvan Molina</h4>
        </div>
      </div>
      <div className="bg-white h-64 min rounded-lg p-4 flex flex-col justify-between">
        <div>
          <ReactStars
            count={5}
            edit={false}
            size={16}
            value={5}
            activeColor="#ffd700"
          />
          <p>
            lorem ipsum dolor sit amet consectetur adipisicing elit. lorem ipsum
            dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="flex items-center">
          <img
            src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
            alt=""
            className="rounded-full w-12 h-12 object-cover"
          />
          <h4 className="ml-2">Duvan Molina</h4>
        </div>
      </div>
      <div className="bg-white h-64 min rounded-lg p-4 flex flex-col justify-between">
        <div>
          <ReactStars
            count={5}
            edit={false}
            size={16}
            value={5}
            activeColor="#ffd700"
          />
          <p>
            lorem ipsum dolor sit amet consectetur adipisicing elit. lorem ipsum
            dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="flex items-center">
          <img
            src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
            alt=""
            className="rounded-full w-12 h-12 object-cover"
          />
          <h4 className="ml-2">John Smith</h4>
        </div>
      </div>
    </div>
  );
};

export default TestMonialsContainer;
