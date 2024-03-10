export function exportToCSV(teams) {
    return teams.map(team => {
        return [team.name, ...team.players].map(escapeForCSV).join(',');
    }).join('\n');
}

function escapeForCSV(value) {
    //
}