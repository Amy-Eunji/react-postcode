import React, { useState } from "react";
import { useDaumPostcodePopup } from "react-daum-postcode";
import { postcodeScriptUrl } from "react-daum-postcode/lib/loadPostcode";
import styled from "styled-components";

const PostCode = () => {
  const open = useDaumPostcodePopup(postcodeScriptUrl);

  const [address, setAddress] = useState("");
  const [detailAddress, setDetailAddress] = useState("");
  const [extraAddress, setExtraAddress] = useState("");
  const [zonecode, setZonecode] = useState("");

  const handleComplete = (data: {
    address: any;
    addressType: string;
    bname: React.SetStateAction<string>;
    buildingName: string;
    zonecode: string;
  }) => {
    let fullAddress = data.address;

    if (data.addressType === "R") {
      if (data.bname !== "") {
        fullAddress += " " + data.bname;
      }
      if (data.buildingName !== "") {
        fullAddress += " " + data.buildingName;
      }
    }
    console.log(data);

    setAddress(fullAddress);
    setExtraAddress(data.bname);
    setDetailAddress("");
    setZonecode(data.zonecode);
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  return (
    <Input>
      <div className="row">
        <div className="col">
          <input placeholder="우편번호" value={zonecode} readOnly />
          <input
            type="button"
            defaultValue="우편번호 찾기"
            onClick={handleClick}
            style={{
              border: "2px solid black",
            }}
            readOnly
          />
        </div>
      </div>
      <input
        placeholder="주소"
        defaultValue={address}
        style={{ width: "130%" }}
        readOnly
      />
      <input
        placeholder="상세주소"
        defaultValue={detailAddress}
        onChange={(e) => setDetailAddress(e.target.value)}
        style={{ width: "100%" }}
      />
    </Input>
  );
};

const Input = styled.div`
  input {
    margin: 5px 5px 5px;
    padding: 5px 5px 5px;
    font-size: 28px;
    border-radius: 5px;
  }
`;

export default PostCode;
