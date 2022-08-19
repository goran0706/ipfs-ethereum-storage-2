import { CgSearch } from 'react-icons/cg';
import { useState } from 'react';
import styled from '@emotion/styled/macro';

const SearchForm = styled.form`
	background-color: #ebf0f4;
	border-radius: 5px;
	box-shadow: rgb(50 50 93 / 10%) 0px 7px 14px 0px,
		rgb(0 0 0 / 8%) 0px 3px 6px 0px, rgb(0 0 0 / 6%) 0px 0px 1px 0px inset;
	display: flex;
	height: 48px;
	min-width: 100px;
	width: 100%;
`;

const SearchInput = styled.input`
	background-color: #ebf0f4;
	border-radius: 5px;
	border: none;
	color: #333;
	flex: 1;
	font-size: 100%;
	height: 100%;
	outline: none;
	padding: 0 0 0 16px;
	width: 100%;
`;

const SearchButton = styled.button`
	background-color: #168be8;
	border-radius: 5px;
	border: none;
	color: #fff;
	cursor: pointer;
	opacity: 0.2;
	outline: none;
	transition: all 0.15s ease-in-out;
	width: 48px;
	height: 100%;
	&:hover {
		opacity: 1;
		transition: all 0.15s ease-in-out;
	}
`;

export default function Search({
	name = 'search',
	label = 'Search',
	placeholder = 'Search',
	autoComplete = 'off',
	onSubmit,
}) {
	const [term, setTerm] = useState('');

	function handleSubmit(e) {
		e.preventDefault();
		const searchTerm = e.target.elements.search.value;
		onSubmit(searchTerm.value);
	}

	function handleChange(e) {
		setTerm(e.target.value);
	}

	return (
		<SearchForm onSubmit={handleSubmit}>
			<SearchInput
				type='text'
				name={name}
				aria-label={label}
				placeholder={placeholder}
				autoComplete={autoComplete}
				value={term}
				onChange={handleChange}
			/>
			<SearchButton>
				<CgSearch size='24' />
			</SearchButton>
		</SearchForm>
	);
}
