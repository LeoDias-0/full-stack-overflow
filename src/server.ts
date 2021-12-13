import './setup'
import app from './app'

const { PORT } = process.env

app.listen(PORT, () => console.log(`The app is running on port ${PORT}`))