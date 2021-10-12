import { uuid } from "vue-uuid";
export const state = () => ({
    // listCards: [
    //     {
    //         "uuid": 1,
    //         "title": "Minha lista",
    //         "description": "Descrição da minha lista",
    //         "items": [
    //           {
    //             "id": 1,
    //             "text": "Desenvolver um sistema",
    //             "status": 0
    //           },
    //           {
    //             "id": 2,
    //             "text": "Estudar Nuxt.Js",
    //             "status": 1
    //           },
    //           {
    //             "id": 3,
    //             "text": "Estudar Tailwind Css",
    //             "status": 0
    //           }
    //         ]
    //     },
    //     {
    //         "uuid": 2,
    //         "title": "Minha lista 2",
    //         "description": "Descrição da minha lista",
    //         "items": [
    //           {
    //             "id": 1,
    //             "text": "Desenvolver um sistema",
    //             "status": 0
    //           },
    //           {
    //             "id": 2,
    //             "text": "Estudar Nuxt.Js",
    //             "status": 1
    //           },
    //           {
    //             "id": 3,
    //             "text": "Estudar Tailwind Css",
    //             "status": 1
    //           }
    //         ]
    //     }
    // ]
    listCards: []
});

export const mutations = {
    createList(state, dataList) {
        let list = JSON.parse(dataList);

        list.uuid = uuid.v1();
        list.items = [];

        state.listCards.push(list);
console.log(state.listCards);
        localStorage.setItem('list', JSON.stringify(state.listCards));
    },

    createItem(state, dataItem) {
        let item = JSON.parse(dataItem);
        let list = state.listCards.filter(card => item.cardUuid == card.uuid);
        let listData = list[0].items;

        listData.push({
            "id": list[0].items.length + 1,
            "text": item.text,
            "status": 0
        });

        list[0].items = listData;
    },

    changeStatus(state, dataItem) {
        let data = JSON.parse(dataItem);
        let list = state.listCards.filter(card => data.cardUuid == card.uuid);

        list[0].items.forEach(value => {
            if (value.id == data.itemId) {
                value.status = (data.currentStatus) ? 0 : 1;
            }
        });
    },

    removeList(state, listUuid) {
        let list = state.listCards.filter(card => listUuid != card.uuid);
        state.listCards = list;
        localStorage.setItem('list', JSON.stringify(state.listCards));
    },

    loadList(state, list) {
        console.log(list);
        state.listCards = list;
    }
};

export const actions = {
    createList({ commit }, dataList) {
        commit('createList', dataList);
    },

    createItem({ commit }, dataItem) {
        commit('createItem', dataItem);
    },

    changeStatus({ commit }, dataItem) {
        commit('changeStatus', dataItem);
    },

    removeList({ commit }, listUuid) {
        commit('removeList', listUuid);
    },

    loadList({ commit }) {
        if (localStorage.getItem('list')) {
            commit('loadList', JSON.parse(localStorage.getItem('list')));
        }
    }
};