// @ts-ignore
import { createStore } from "vuex"

interface IJsonPlaceholder {
	id: number
	name: string
	username: string
	email: string
	address: {
		street: string
		suite: string
		city: string
		zipcode: string
		geo: {
			lat: string
			lng: string
		}
	}
	phone: string
	website: string
	company: {
		name: string
		catchPhrase: string
		bs: string
	}
}

export default createStore({
	actions: {
		async fetchData({ state, commit }: any, value: string) {
			try {
				commit("parseInputString", value)
				state.isLoading = true

				if (value) {
					const resp: IJsonPlaceholder[] = await fetch(
						`https://jsonplaceholder.typicode.com/users?_start=0&_end=${state.countElements}&${state.httpParams}`,
					).then((resp) => resp.json())

					commit("setData", resp)
				} else {
					commit("setData", [])
					state.currentCardId = null
				}
			} catch (e) {
				console.error(e)
				commit("handleError")
			} finally {
				state.isLoading = false
			}
		},
	},
	mutations: {
		parseInputString(state: any, value: string) {
			if (value) {
				const replaceVal = value.replace(/\s/g, "")
				const splitVal = replaceVal.split(",")

				state.httpParams = splitVal
					.map((str: string) => (str.match(/^[0-9,]+$/) === null ? "username=" + str : "id=" + str))
					.join("&")
			} else {
				state.httpParams = ""
			}
		},

		setData(state: any, resp: IJsonPlaceholder[]) {
			if (Array.isArray(resp)) {
				state.items = resp
			}
		},

		handleError(state: any) {
			state.isError = true

			setTimeout(() => (state.isError = false), 6000)
		},
	},
	state: {
		isLoading: <boolean>false,
		isError: <boolean>false,
		httpParams: <string>"",
		filterVal: <string>"",
		items: <IJsonPlaceholder[]>[],
		countElements: <number>10, // max:10
		currentCardId: <number | string | null>null,
	},
	getters: {
		getSelectedUser(state: any) {
			return state.items.find(
				(el: IJsonPlaceholder) => state.currentCardId !== null && el.id === state.currentCardId,
			)
		},
	},
})
