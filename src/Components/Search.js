// @flow weak

import React from 'react'
import styled from 'styled-components'
import { AutoComplete, Input, Button, Spinner } from '.'
import useForm from 'react-hook-form'
import queryString from 'query-string'

const SearchBox = styled.div`
  width: 50%;
  background: #fcfcfc;
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(50%, 50%);
  height: auto;
  border-radius: 10px;
  box-shadow: 1px 1px 16px 1px rgba(0, 0, 0, 0.69);
`
const StyledFieldSet = styled.fieldset`
  margin: 15px;
  display: flex;
  flex-direction: column;
`
const StyledLegend = styled.legend`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 2px;
`

const Error = styled.div`
  font-size: 12px;
  color: #d8000c;
`
const StyledSpinner = styled.div`
  position: absolute;
  right: 6px;
  top: 7px;
`

type Props = {
  search?: string,
  getName?: () => void
}

const Search: React$ComponentType<Props> = ({
  search,
  getName,
  state,
  calculateDistance,
  updateContext
}) => {
  const { register, handleSubmit, errors, setValue } = useForm()
  if (search) {
    const qs = queryString.parse(search)
    console.log(search, qs)
  }

  const onSubmit = data => {
    calculateDistance({
      origin: data.distanceFrom,
      destination: data.distanceTo,
      date: data.date,
      passengers: data.passengers
    })
  }

  return (
    <SearchBox>
      <form autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
        <StyledFieldSet>
          <StyledLegend>Calculate Distance:</StyledLegend>
          <AutoComplete
            label='Distance From:'
            name='distanceFrom'
            placeholder='Enter Location ..'
            ref={register({ required: true })}
            getName={getName}
            state={state}
            setValue={setValue}
            updateContext={updateContext}
          />
          <Error>{errors.distanceFrom && 'Distance From is required.'}</Error>
          <AutoComplete
            label='Distance To:'
            name='distanceTo'
            placeholder='Enter Location ..'
            ref={register({ required: true })}
            getName={getName}
            state={state}
            setValue={setValue}
            updateContext={updateContext}
          />
          <Error>{errors.distanceTo && 'Distance To is required.'}</Error>
          <Input
            label='Select Date:'
            name='date'
            placeholder='Select Date ..'
            type='date'
            ref={register({ required: true })}
          />
          <Error>{errors.date && 'Date is required.'}</Error>

          <Input
            label='No of Passengers:'
            name='passengers'
            placeholder='Enter No of Passengers ..'
            type='number'
            ref={register({ required: true })}
          />
          <Error>{errors.passengers && 'No of Passengers is required.'}</Error>
          <Button type='submit'>Search Distance  {state.fetchingDistance && <StyledSpinner>
            <Spinner size={25} color="#fff" />
          </StyledSpinner> }</Button>
         
        </StyledFieldSet>
      </form>
    </SearchBox>
  )
}

export default Search
