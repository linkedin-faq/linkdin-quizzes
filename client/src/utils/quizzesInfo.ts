import images from "../assests";

const imagesPath = Object.values(images);
const subjects = Object.keys(images);

const quizzesInfo = subjects.map((_, i) => ({
  subject: subjects[i],
  img: imagesPath[i],
}));

export default quizzesInfo;
