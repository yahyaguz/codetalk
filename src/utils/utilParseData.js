export default function (data) {
    if (!data) {
        return;
    }
    return Object?.keys(data)?.map(key => {
        return {
            id: key,
            ...data[key],
        };
    })?.sort(function (a, b) {
        if (a?.type == "message" && b?.type == "message") {
            return a.date < b.date ? -1 : a.date > b.date ? 1 : 0
        }

        if (a?.type == "room") {
            return a.date > b.date ? -1 : a.date < b.date ? 1 : 0
        }
    })
};