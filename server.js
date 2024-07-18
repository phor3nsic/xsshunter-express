'use strict';

const express = require('express');
const get_app_server = require('./app.js');
const database = require('./database.js');
const database_init = database.database_init;

(async () => {
    try {
        // Ensure database is initialized.
        await database_init();
        console.log('Database initialized.');

        // Assuming get_app_server returns an Express app
        const app = await get_app_server();
        console.log('App server obtained.');

        // Create and start the server
        const port = process.env.PORT || 3000;
        app.listen(port, () => {
            console.log(`Server is running on http://0.0.0.0:${port}`);
        });
    } catch (error) {
        console.error('Error initializing the server:', error);
    }
})();