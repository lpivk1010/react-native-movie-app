import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { Text } from 'core/components';

import { MovieDetailsService } from '../service';

export const DetailsSocial = ({ reviewCount = 0, latestReview = {} }) => {
  const { author, avatarPath, createdAt, content } =
    MovieDetailsService.getSocialInfo(latestReview);
  return (
    <StyledSocial>
      <Text
        fontSize="20px"
        lineHeight="28px"
        color="#0b253f"
        bold
        isSectionTitle
      >
        Social
      </Text>
      <SocialTabPicker reviewCount={reviewCount} />
      <StyledReviewHeader>
        {!!avatarPath && (
          <StyledReviewLogo
            source={{
              uri: avatarPath,
            }}
          />
        )}
        <ReviewDetails author={author} createdAt={createdAt} />
      </StyledReviewHeader>
      <Text
        fontSize="14px"
        lineHeight="20px"
        color="#828282"
        numberOfLines={15}
      >
        {content}
      </Text>
    </StyledSocial>
  );
};

DetailsSocial.propTypes = {
  reviewCount: PropTypes.number.isRequired,
  latestReview: PropTypes.object.isRequired,
};

DetailsSocial.defaultProps = {
  reviewCount: 0,
  latestReview: {},
};

const StyledSocial = styled.View`
  margin: 0 18px;
  margin-bottom: 20px;
`;

const SocialTabPicker = ({ reviewCount }) => (
  <StyledTabs>
    <StyledTab isCurrent>
      <StyledTabText
        fontSize="16px"
        lineHeight="22px"
        color="#0b253f"
        isCurrent
        bold
      >
        Reviews ({reviewCount})
      </StyledTabText>
    </StyledTab>
    <StyledTab>
      <StyledTabText fontSize="16px" lineHeight="22px" color="#828282">
        Discussions (0)
      </StyledTabText>
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

const StyledTabText = styled(Text)`
  color: ${(props) => (props.isCurrent ? '#0b253f' : '#828282')};
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
    <Text fontSize="18px" lineHeight="25px" color="#000000">
      A review by {author}
    </Text>
    <Text fontSize="14px" lineHeight="20px" color="#828282">
      Written by {author} on
    </Text>
    <Text fontSize="14px" lineHeight="20px" color="#828282">
      {createdAt}
    </Text>
  </StyledReviewDetails>
);

const StyledReviewDetails = styled.View`
  height: 60px;
  width: 280px;
  flex-direction: column;
  justify-content: space-between;
`;
