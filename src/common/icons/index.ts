// @ts-ignore
import Icons from './icons'

import {
	jvi_angle_down__classic_solid,
	jvi_angle_left__classic_solid,
	jvi_angle_right__classic_solid,
	jvi_angle_up__classic_solid,
	jvi_chevron_up__classic_solid,
	jvi_envelope__classic_solid,
	jvi_link__classic_solid,
	jvi_messages__classic_solid,
	jvi_paper_plane__classic_solid,
	jvi_person_running__classic_solid,
	jvi_star__classic_solid,
	jvi_user__classic_solid,
} from './../../fonts/paths/full/classicSolid.mjs'

import {
	jvi_angle_up__classic_light,
	jvi_envelope__classic_light,
	jvi_messages__classic_light,
	jvi_paper_plane__classic_light,
	jvi_person_running__classic_light,
	jvi_star__classic_light,
	jvi_user__classic_light,
} from './../../fonts/paths/full/classicLight.mjs'

import {
	jvi_envelope__classic_regular, jvi_link__classic_regular,
	jvi_messages__classic_regular,
	jvi_paper_plane__classic_regular,
	jvi_user__classic_regular,
} from './../../fonts/paths/full/classicRegular.mjs'

import {
	jvi_angle_left__classic_duotone,
	jvi_angle_right__classic_duotone,
	jvi_messages__classic_duotone,
	jvi_user__classic_duotone,
	jvi_envelope__classic_duotone, jvi_paper_plane__classic_duotone, jvi_cookie__classic_duotone,
} from './../../fonts/paths/full/classicDuotone.mjs'

export declare interface GIcons {
	classic: {
		solid: Icons,
		regular: Icons,
		light: Icons,
		thin: Icons,
		duotone: Icons
	},
	sharp: {
		solid: Icons,
		regular: Icons
	},
	brands: {}
}


export const classicSolid = {
	angleDown: jvi_angle_down__classic_solid,
	angleLeft: jvi_angle_left__classic_solid,
	angleRight: jvi_angle_right__classic_solid,
	angleUp: jvi_angle_up__classic_solid,
	chevronUp: jvi_chevron_up__classic_solid,
	envelope: jvi_envelope__classic_solid,
	link: jvi_link__classic_solid,
	messages: jvi_messages__classic_solid,
	paperPlane: jvi_paper_plane__classic_solid,
	personRunning: jvi_person_running__classic_solid,
	star: jvi_star__classic_solid,
	user: jvi_user__classic_solid,
}

export const classicRegular = {
	envelope: jvi_envelope__classic_regular,
	link: jvi_link__classic_regular,
	messages: jvi_messages__classic_regular,
	paperPlane: jvi_paper_plane__classic_regular,
	user: jvi_user__classic_regular,
}

export const classicLight = {
	angleUp: jvi_angle_up__classic_light,
	envelope: jvi_envelope__classic_light,
	messages: jvi_messages__classic_light,
	paperPlane: jvi_paper_plane__classic_light,
	personRunning: jvi_person_running__classic_light,
	star: jvi_star__classic_light,
	user: jvi_user__classic_light,
}

export const classicThin = {}

export const classicDuotone = {
	angleLeft: jvi_angle_left__classic_duotone,
	angleRight: jvi_angle_right__classic_duotone,
	messages: jvi_messages__classic_duotone,
	user: jvi_user__classic_duotone,
	envelope: jvi_envelope__classic_duotone,
	paperPlane: jvi_paper_plane__classic_duotone,
	cookie: jvi_cookie__classic_duotone
}

export const sharpSolid = {}

export const sharpRegular = {}

const gIcons: GIcons = {
	classic: {
		solid: classicSolid,
		regular: classicRegular,
		light: classicLight,
		thin: classicThin,
		duotone: classicDuotone
	},
	sharp: {
		solid: sharpSolid,
		regular: sharpRegular,

	},
	brands: {}
}

export default gIcons