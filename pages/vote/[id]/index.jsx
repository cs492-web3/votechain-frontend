import React, { useState } from "react";
import * as S from "./index.styles";
import Candidate from "./components/Candidate";
import { Button } from "@mui/base";
import { sendVoteTo } from "../../../utils/interact";
import { useAccount } from "wagmi";

const Vote = () => {
  const [selectedId, setSelectedId] = useState(null);
  const handleClick = (id) => (e) => {
    setSelectedId(id);
  };

  const [address, setAddress] = useState("");
  const candidateProps = { selectedId, handleClick };

  const account = useAccount({
    onConnect({ address, connector, isReconnected }) {
      if (!isReconnected) router.reload();
      else setAddress(address);
    },
  });

  const voteHandler = async () => {
    if (selectedId == null) {
      alert("후보자를 선택해주세요");
    } else {
      alert(selectedId + "번 후보에게 투표");
      const result = await sendVoteTo(address, selectedId);
      console.log(result);
    }
  };

  return (
    <S.RootStyle>
      <S.Title>투표를 해주세요!</S.Title>
      <S.CandidateContainer>
        <Candidate id={1} {...candidateProps}></Candidate>
        <Candidate id={2} {...candidateProps}></Candidate>
        <Candidate id={3} {...candidateProps}></Candidate>
      </S.CandidateContainer>
      <S.VoteButton onClick={voteHandler}>투표하기</S.VoteButton>
    </S.RootStyle>
  );
};

export default Vote;
