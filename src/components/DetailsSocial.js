import React from 'react';
import styled from 'styled-components';

import { MovieDetailsService } from '../services/MovieDetailsService';

export const DetailsSocial = ({ reviewCount = 0, latestReview = {} }) => {
  const { author, avatarPath, createdAt, content } =
    MovieDetailsService.getSocialInfo(latestReview);
  return (
    <StyledSocial>
      <StyledTitle>Social</StyledTitle>
      <SocialTabPicker reviewCount={reviewCount} />
      <StyledReviewHeader>
        <StyledReviewLogo
          source={{
            uri: avatarPath,
          }}
        />
        <ReviewDetails author={author} createdAt={createdAt} />
      </StyledReviewHeader>
      <StyledReviewText numberOfLines={15}>{content}</StyledReviewText>
    </StyledSocial>
  );
};

const StyledSocial = styled.View`
  margin: 0 18px;
  margin-bottom: 20px;
`;

const StyledTitle = styled.Text`
  font-family: Proxima Nova;
  font-size: 20px;
  line-height: 28px;
  color: #0b253f;
  margin-bottom: 8px;
`;

const SocialTabPicker = ({ reviewCount }) => (
  <StyledTabs>
    <StyledTab isCurrent>
      <StyledTabText isCurrent>Reviews ({reviewCount})</StyledTabText>
    </StyledTab>
    <StyledTab>
      <StyledTabText>Discussions (0)</StyledTabText>
    </StyledTab>
  </StyledTabs>
);

const StyledTabs = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 8px;
`;

const StyledTab = styled.Pressable`
  height: 30px;
  margin-right: 30px;
  border-bottom-width: ${(props) => (props.isCurrent ? '3px' : '0')};
  border-bottom-color: ${(props) => (props.isCurrent ? '#000000' : '0')};
`;

const StyledTabText = styled.Text`
  font-family: ProximaNova-Regular;
  font-size: 16px;
  line-height: 22px;
  color: ${(props) => (props.isCurrent ? '#000000' : '#828282')};
`;

const StyledReviewHeader = styled.View`
  height: 80px;
  margin-bottom: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StyledReviewLogo = styled.Image`
  height: 56px;
  width: 56px;
  border-radius: 28px;
`;

const ReviewDetails = ({ author, createdAt }) => (
  <StyledReviewDetails>
    <StyledReviewText isTitle>A review by {author}</StyledReviewText>
    <StyledReviewText>Written by {author} on</StyledReviewText>
    <StyledReviewText>{createdAt}</StyledReviewText>
  </StyledReviewDetails>
);

const StyledReviewDetails = styled.View`
  height: 60px;
  width: 280px;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledReviewText = styled.Text`
  font-family: ProximaNova-Regular;
  font-size: ${(props) => (props.isTitle ? '18px' : '14px')};
  line-height: ${(props) => (props.isTitle ? '25px' : '20px')};
  color: ${(props) => (props.isTitle ? '#000000' : '#828282')};
`;
