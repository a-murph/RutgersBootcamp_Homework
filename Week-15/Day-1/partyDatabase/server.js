var orm = require("./config/orm.js");

orm.selectAll("parties", "party_name");
orm.selectAll("clients", "client_name");
orm.selectWhere("parties", "party_type", "grown-up");
orm.clientParties("client_name", "client_id", "clients", "parties");