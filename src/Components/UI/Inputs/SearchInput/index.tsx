import React from 'react'
import BaseInput from '../BaseInput'
import { SearchIcon } from 'Icons'

type Props = {}

const SearchInput = (props: Props) => {
  return (
    <BaseInput leftIcon={SearchIcon} placeholder="Search" />
  )
}

export default SearchInput
