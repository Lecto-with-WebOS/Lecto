import kind from "@enact/core/kind";
import BodyText from "@enact/sandstone/BodyText";

import LocationMark from "../asset/images/lecture_location_mark.svg";
import HomeButton from "../asset/images/lecture_home_button.svg";

import Weather from "../asset/images/lecture_weather.svg";
import { Link } from "@enact/ui/Routable";

const LectureFooter = kind({
  name: "LectureFooter",

  render: ({ classroom_name, temperature, current_time, yyyy_mm_dd }) => (
    <div
      style={{
        zIndex: "2",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        height: "220px",
        backgroundColor: "#2B6590"
      }}
    >
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            width: "800px"
          }}
        >
          <img
            src={LocationMark}
            alt=""
            style={{
              width: "50px",
              height: "50px",
              marginLeft: "30px"
            }}
          />
          <BodyText
            style={{
              width: "500px",
              fontSize: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "0px"
            }}
          >
            {classroom_name}
          </BodyText>
        </div>
      </div>
      <div>
        <Link
          path="/table"
          style={{
            display: "flex",
            width: "180px",
            height: "180px"
          }}
        >
          <img
            src={HomeButton}
            alt=""
            style={{
              width: "180px",
              height: "180px"
            }}
          />
        </Link>
      </div>
      <div
        style={{
          display: "flex",
          width: "800px",

          marginTop: "50px"
        }}
      >
        <BodyText
          style={{
            width: "50px",
            fontSize: "60px",
            textAlign: "center",

            marginLeft: "300px",
            marginTop: "40px"
          }}
        >
          {temperature}
        </BodyText>
        <img
          src={Weather}
          alt=""
          style={{
            width: "120px",
            height: "120px",

            marginLeft: "20px"
          }}
        />
        <div
          style={{
            width: "1px",
            height: "130px",
            backgroundColor: "white",
            marginLeft: "30px"
          }}
        />
        <div>
          <BodyText
            style={{
              width: "60px",
              fontSize: "60px",
              fontStyle: "bold",
              textAlign: "center",

              marginLeft: "50px"
            }}
          >
            {current_time}
          </BodyText>
          <BodyText
            style={{
              width: "60px",
              fontSize: "30px",
              textAlign: "center",
              marginLeft: "50px"
            }}
          >
            {yyyy_mm_dd}
          </BodyText>
        </div>
      </div>
    </div>
  )
});

export default LectureFooter;
