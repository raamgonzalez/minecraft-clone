/* eslint-disable indent */
/* eslint-disable no-tabs */
import { create } from 'zustand'
import { nanoid } from 'nanoid'

export const useStore = create((set, get) => ({
	texture: 'dirt',
	cubes: [{
		id: nanoid(),
		pos: [1, 1, 1],
		texture: 'dirt'
	}],
	addCube: () => { },
	removeCube: () => { },
	setTexture: () => { },
	saveWorld: () => { },
	resetWorld: () => { }
}))
