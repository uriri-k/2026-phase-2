import { useEffect, useState } from "react"
import { PlusIcon } from "lucide-react"
import { Link } from "react-router"
import { Button } from "~/components/ui/button"

export default function TopPage() {
	const [message, setMessage] = useState<string | null>(null)
	useEffect(() => {
		fetch(`${window.location.origin}/api/hello-react-router`)
			.then((res) => res.json())
			.then((json) => setMessage(json.message))
	}, [])

	return (
		<div>
			<h1>トップページ</h1>
			<Button variant="brand" size="xl" className="rounded-2xl" asChild>
					<Link to="/app/live/create">
						<PlusIcon />
						ライブを作成
					</Link>
				</Button>
			<div>{message}</div>
		</div>
	)
}
