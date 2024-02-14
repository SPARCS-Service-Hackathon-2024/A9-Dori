import TagCareer from "./TagCareer";
import TagDori from "./TagDori";
import TagIdea from "./TagIdea";
import TagTech from "./TagTech";

const Tag = ({ type }) => {
  switch (type) {
    case "career":
      return <TagCareer />;
    case "dori":
      return <TagDori />;
    case "idea":
      return <TagIdea />;
    case "tech":
      return <TagTech />;
    default:
      return null;
  }
};

export default Tag;
