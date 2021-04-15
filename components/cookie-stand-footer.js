export default function Footer({ reports }) {
    return(
        <footer className="p-4 mt-6 text-sm text-center bg-green-500">
            <p>{reports.length} Locations World Wide</p>
        </footer>
    )
}