const app = require('./api/app.js');
const server = express();

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`\n** Running on port ${port} **\n`));
app.timeout = 60 * 10 * 1000;


const BudgetCategoriesRouter = require('./api/budgetcategories/budgetCategoriesRouter')
server.use('./api/budgetcategories', BudgetCategoriesRouter)