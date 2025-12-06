import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { positioningFlex, defaultText } from '@src/style/mixins/mixins'

// ------ STYLES ------

export const Wrapper = styled.section`
  ${positioningFlex({
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  })};

  gap: ${({ theme }) => theme.gap.sizeXL}px;
  padding: 0 ${({ theme }) => theme.gap.sizeXL}px;
  width: 100%;
`

export const Title = styled.h2`
  ${({ theme }) =>
    defaultText({
      fontSize: theme.font.fontSize.large,
      color: theme.colors.primary,
    })};
`

export const CreateArea = styled.textarea`
  width: 100%;
  height: 120px;
  padding: ${({ theme }) => theme.gap.sizeL}px;
  border-radius: ${({ theme }) => theme.sizes.borderRadius.big}px;
  background-color: ${({ theme }) => theme.colors.translucentSecondary};
  border: none;
  resize: none;

  ${({ theme }) =>
    defaultText({
      fontSize: theme.font.fontSize.paragraph,
      color: theme.colors.primary,
    })};

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
  }
`

export const AddButton = styled.button`
  ${({ theme }) =>
    defaultText({
      fontSize: theme.font.fontSize.medium,
      color: theme.colors.secondary,
    })};

  background-color: ${({ theme }) => theme.colors.primary};
  padding: 10px 20px;
  border-radius: ${({ theme }) => theme.sizes.borderRadius.default}px;
  border: none;
  cursor: pointer;
  transition: all ${({ theme }) => theme.durations.ms300}s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverPrimaryColor};
  }

  &:active {
    opacity: 0.8;
  }
`

export const NotesList = styled.ul`
  ${positioningFlex({
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  })};
  width: 100%;
  gap: ${({ theme }) => theme.gap.sizeL}px;
`

export const NoteItem = styled.li`
  background-color: ${({ theme }) => theme.colors.translucentSecondary};
  padding: ${({ theme }) => theme.gap.sizeL}px;
  width: 100%;
  border-radius: ${({ theme }) => theme.sizes.borderRadius.big}px;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: ${({ theme }) => theme.gap.sizeM}px;
`

export const NoteText = styled.textarea`
  flex: 1;
  border: none;
  resize: none;
  background: transparent;
  min-height: 80px;

  ${({ theme }) =>
    defaultText({
      color: theme.colors.primary,
      fontSize: theme.font.fontSize.paragraph,
    })};

  &:focus {
    outline: none;
  }
`

export const DeleteButton = styled.button`
  border: none;
  background: ${({ theme }) => theme.colors.red};
  color: white;
  cursor: pointer;
  padding: 6px 12px;
  border-radius: ${({ theme }) => theme.sizes.borderRadius.default}px;

  ${({ theme }) =>
    defaultText({
      color: theme.colors.secondary,
      fontSize: theme.font.fontSize.small,
    })};

  transition: opacity ${({ theme }) => theme.durations.ms300}ms ease;

  &:hover {
    opacity: 0.7;
  }

  &:active {
    opacity: 0.5;
  }
`

