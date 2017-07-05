defmodule PhxVue.Web.WorkerChannel do
  use PhxVue.Web, :channel

  def join("worker:all", payload, socket) do
    {:ok, socket}
  end

  def join("worker:" <> _private_room_id, _params, _socket) do
    {:error, %{reason: "Unauthorized"}}
  end

  def handle_in("new_msg", %{"body" => body}, socket) do
    broadcast! socket, "new_msg", %{body: body}
    {:noreply, socket}
  end

  def handle_out("new_msg", payload, socket) do
    push socket, "new_msg", payload
    {:noreply, socket}
  end

end
