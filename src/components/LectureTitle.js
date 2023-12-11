import kind from "@enact/core/kind";
import Heading from "@enact/sandstone/Heading";

const LectureTitle = kind({
  name: "LectureTitle",

  render: ({ text }) => (
    <Heading style={{ fontSize: '60px' }} size="large" spacing="small" alignment="center">
      {text}
    </Heading>
  )
});

export default LectureTitle;
